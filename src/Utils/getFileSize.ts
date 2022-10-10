/* eslint-disable no-case-declarations */
/* 
  Gets the file size of a base64 string
  and returns the size in KB or MB
*/

type Unit = 'kb' | 'mb';

export const getFileSize = (base64String: string, unit?: Unit) => {
  const sizeInBytes = 4 * Math.ceil(base64String.length / 3) * 0.5624896334383812;

  switch (unit) {
    case 'kb':
      const sizeInKb = sizeInBytes / 1000;
      return sizeInKb;
    case 'mb':
      const sizeInMb = sizeInBytes / 1024 ** 2;
      return sizeInMb;
    default:
      return sizeInBytes;
  }
};
