export interface Task {
  id: string;
  title: string;
  category: 'Inbox' | 'In Progress' | 'Done';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export type ViewType = 'list' | 'board' | 'focus';

export interface Integration {
  id: string;
  name: string;
  description: string;
  active: boolean;
  category: string;
}

export interface FeedbackMessage {
  email: string;
  message: string;
  submittedAt: string;
}
