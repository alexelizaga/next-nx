'use client';

import { useRouter } from 'next/navigation';
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';
import { useConfettiStore } from '@/hooks/use-confetti-store';
import axios from 'axios';
import { Loader2, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';

import { YoutubePlayerControls } from './youtube-player-controls';

interface YoutubePlayerProps {
  url: string;
  controls?: boolean;
  playing?: boolean;
  loop?: boolean;
  start?: number;
  end?: number;
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
  start = 0,
  end = 60,
  completeOnEnd,
  courseId,
  chapterId,
  nextChapterId,
  isLocked
}: YoutubePlayerProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();

  const [isMounted, setIsMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const videoRef = useRef<ReactPlayer>(null);

  const [isPlaying, setIsPlaying] = useState(playing);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState('1');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [played, setPlayed] = useState(start);

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
    setPlayed(playedSeconds);
    if (playedSeconds > end) {
      setIsPlaying(false);
      videoRef.current?.seekTo(end);
      setPlayed(end);
      onEnded();
    }
  };

  const onPlaying = () => {
    setIsPlaying((current) => !current);
  };

  const onVolumeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const onPlaybackRateChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setPlaybackRate(e.target.value);
  };

  const onFullscreen = () => {
    setIsFullscreen((current) => !current);
    if (!isFullscreen) {
      screenfull.request(document.querySelector('.react-player') || undefined);
    } else {
      screenfull.exit();
    }
  };

  const onSeekChange = (seek: number) => {
    setPlayed(seek);
  };

  const onSeekMouseUp: MouseEventHandler<HTMLInputElement> = () => {
    videoRef.current?.seekTo(played);
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
        <div className="react-player relative border shadow-2xl shadow-black rounded-md overflow-hidden w-full h-full drop-shadow-sm group">
          <ReactPlayer
            ref={videoRef}
            url={url + `&t=${start ?? 1}`}
            controls={controls}
            playing={isPlaying}
            volume={volume}
            loop={loop}
            width="100%"
            height="100%"
            onEnded={onEnded}
            onReady={() => setIsReady(true)}
            onProgress={onProgress}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            playbackRate={parseFloat(playbackRate)}
          />
          <YoutubePlayerControls
            isPlaying={isPlaying}
            onPlaying={onPlaying}
            volume={volume}
            onVolumeChange={onVolumeChange}
            playbackRate={playbackRate}
            onPlaybackRateChange={onPlaybackRateChange}
            isFullscreen={isFullscreen}
            onFullscreen={onFullscreen}
            start={start}
            end={end}
            onSeekChange={onSeekChange}
            onSeekMouseUp={onSeekMouseUp}
            played={played}
          />
        </div>
      )}
    </div>
  );
};
