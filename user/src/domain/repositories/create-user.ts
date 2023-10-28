import { User } from '../../domain/entities/user'
export const create = async (userData:any) => {
    try {
      const result = await User.create(userData);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }