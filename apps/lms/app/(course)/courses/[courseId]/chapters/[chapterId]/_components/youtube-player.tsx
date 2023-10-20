'use client';

import { useConfettiStore } from '@/hooks/use-confetti-store';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { Loader2, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';

interface YoutubePlayerProps {
  url: string;
  controls?: boolean;
  playing?: boolean;
  loop?: boolean;
  start?: number | null;
  end?: number | null;

  completeOnEnd: boolean;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
}

export const YoutubePlayer = ({
  url,
  controls = true,
  playing = true,
  loop = false,
  start = 1,
  end,
  completeOnEnd,
  courseId,
  chapterId,
  nextChapterId,
  isLocked
}: YoutubePlayerProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(playing);
  const router = useRouter();
  const confetti = useConfettiStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onEnded = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(
          `/api/courses/${courseId}/chapters/${chapterId}/progress`,
          {
            isCompleted: true
          }
        );

        if (!nextChapterId) {
          confetti.onOpen();
        }

        toast.success('Progress updated');
        router.refresh();

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
        }
      }
    } catch {
      toast.error('Something went wrong');
    }
  };

  const onProgress = ({ playedSeconds }: OnProgressProps) => {
    if (end && playedSeconds > end) {
      setIsPlaying(false);
      onEnded();
    }
  };

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && isMounted && (
        <ReactPlayer
          url={url + `&t=${start}`}
          controls={controls}
          playing={isPlaying}
          loop={loop}
          width="100%"
          height="100%"
          onEnded={onEnded}
          onReady={() => setIsReady(true)}
          onProgress={onProgress}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};
