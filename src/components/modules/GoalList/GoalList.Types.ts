export type GoalListProps = {
  id: number;
  title: string;
  byline?: string;
  color: string;
  icon: string;
  children: React.ReactNode;
};
export type GoalListResponse = GoalListProps[];
