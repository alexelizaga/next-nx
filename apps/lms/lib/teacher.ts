export const isTeacher = (userId?: string | null): boolean => {
  if (!userId || !process.env.NEXT_PUBLIC_TEACHERS_IDS) return false;
  return process.env.NEXT_PUBLIC_TEACHERS_IDS.includes(userId);
};
