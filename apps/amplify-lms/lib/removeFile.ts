import { Storage } from 'aws-amplify';

export const removeFile = async (key: string) => {
  if (!key) return;
  try {
    await Storage.remove(key, { level: 'private' });
    console.log(`Archivo ${key} eliminado con éxito`);
  } catch (error) {
    console.error('Error al eliminar el archivo', error);
  }
};
