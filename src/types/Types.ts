export type userType = {
  user_id: number;
  password: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone_number: string;
  address_line_1: string;
  profile_image_url: string;
  user_type: string;
};

export type HabitType = {
  _id?: string;
  title: string;
  frequency: number;
  duration: number;
  description: string;
  completed: number;
  completedDates: [
    {
      dates: Date;
      isSkipped: Boolean;
      status: Boolean;
    },
  ];
};
