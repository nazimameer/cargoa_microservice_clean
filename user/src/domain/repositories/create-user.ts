import { User } from '../../domain/entities/user'
import { RegCredentials } from './interfaces'
export const create = async (userData:RegCredentials) => {
    try {
      const result = await User.create(userData);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }