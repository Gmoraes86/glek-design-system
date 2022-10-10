import React, { memo, useCallback, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { Typography } from '../../../Components/General';
import { InputFileContainer, Placeholder } from './styles';

interface InputFileProps extends DropzoneOptions {
  onFileSelected: (file: string) => void;
  outputType?: 'base64' | 'binary';
  helpText?: string;
  label?: string;
  errorState?: boolean;
  setErrorState?: (error: boolean) => void;
  maxHeight?: number | '*';
  sizeLimit?: number;
  maxWidth?: number;
  accept?: any;
}

const InputFile = ({
  maxWidth,
  onFileSelected,
  outputType = 'base64',
  sizeLimit = 5242880, //5MB
  helpText,
  multiple,
  accept,
  errorState,
  setErrorState,
  maxHeight,
  label,
}: InputFileProps) => {
  const [error, setError] = useState<string | null>();
  const onDrop = useCallback(
    (acceptedFiles: Blob[], fileRejections: any[]) => {
      acceptedFiles.forEach((file: Blob) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (!errorState) {
            reader && reader.result && onFileSelected(reader.result.toString());
          }
        };
        outputType === 'base64' ? reader.readAsDataURL(file) : reader.readAsBinaryString(file);
      });
      fileRejections.forEach((file: any) => {
        if (file.errors.length > 0) {
          file.errors.forEach((err: any) => {
            setError(err.code);
            setErrorState && setErrorState(true);
          });
        }
      });
    },
    [onFileSelected, outputType],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    maxSize: sizeLimit || 5000000,
    accept,
    validator: (file) => {
      const img = new Image();

      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        if (maxWidth && width > maxWidth) {
          setError('file-max-width');
          setErrorState && setErrorState(true);
        } else if (maxWidth && width < maxWidth) {
          setError('file-min-width');
          setErrorState && setErrorState(true);
        } else if (maxHeight && height > maxHeight) {
          setError('file-max-height');
          setErrorState && setErrorState(true);
        } else if (maxHeight && height < maxHeight) {
          setError('file-min-height');
          setErrorState && setErrorState(true);
        } else {
          setError(null);
          setErrorState && setErrorState(false);
        }
      };
      return null;
    },
  });

  const renderError = (error: string) => {
    switch (error) {
      case 'file-too-large':
        return 'O arquivo é muito grande';
      case 'file-max-width':
        return 'A largura máxima é de ' + maxWidth + 'px';
      case 'file-min-width':
        return 'A largura mínima é de ' + maxWidth + 'px';
      case 'file-max-height':
        return 'A altura máxima é de ' + maxHeight + 'px';
      case 'file-min-height':
        return 'A altura mínima é de ' + maxHeight + 'px';
      case 'file-invalid-type':
        return 'O arquivo deve ser do tipo JPEG, PNG, SVG, WEBP ou WEBM';
      default:
        return 'Erro desconhecido';
    }
  };

  const renderResetError = () => {
    return (
      <a
        onClick={() => {
          setError('');
          if (setErrorState) {
            setErrorState(false);
          }
        }}
      >
        X
      </a>
    );
  };

  const gethelpText = () => {
    const msgLabel = label ? `- ${label}` : '';
    const msgHeight = maxHeight ? ` - Altura: ${maxHeight}px` : '';
    const msgWidth = maxWidth ? `Largura: ${maxWidth}px` : '';
    const msgSizes = maxHeight || maxWidth ? `(${msgWidth}${msgHeight})` : '';

    const msg = `Arraste sua imagem aqui, ou clique para selecionar ${msgSizes} ${msgLabel}`;
    return helpText || msg;
  };

  return (
    <InputFileContainer {...getRootProps()}>
      {errorState && error && (
        <Typography variant="b-sm" color="error">
          {renderError(error)} {renderResetError()}
        </Typography>
      )}
      <input {...getInputProps()} type="file" />
      <Placeholder>{gethelpText()}</Placeholder>
    </InputFileContainer>
  );
};

export default memo(InputFile);
