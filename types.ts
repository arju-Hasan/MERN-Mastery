
export type CategoryType = 'React JS' | 'MongoDB' | 'Node JS' | 'Express JS' | 'HTML' | 'CSS' | 'JavaScript';

export interface Question {
  id: string;
  category: CategoryType;
  topic: string;
  question: string;
  answer: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface AppState {
  currentCategory: CategoryType;
  searchQuery: string;
  selectedTopic: string | 'All';
  favorites: string[];
}
