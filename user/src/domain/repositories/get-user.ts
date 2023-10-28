// export const getUser = async () => {
//     try {
//         const database = client.db();
//         const user = await database.collection('users').findOne({ _id: new ObjectId(userId) });
//         return user;
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         throw error;
//       }
//   }