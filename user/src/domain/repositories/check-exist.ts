import { User } from '../../domain/entities/user'
export const create = async (username:any) => {
    try {
      const result = await User.findOne(username);
      if(result) return true;
      return false;
    } catch (error) {
      console.error('Error check user:', error);
      throw error;
    }
  }