'use client';

import { ImageInput } from '@/components/ImageInput';

import {
  inputField,
  image,
  container,
  buttonGroup,
  errorMessage,
} from './style.css';
import { useSendImageForm, IMAGE_ID } from './useSendImageForm';

export const SendImageForm: React.FC = () => {
  const {
    fileName,
    imageSource,
    fileInputRef,
    errors,
    rest,
    ref,
    onSubmit,
    handleSubmit,
    handleClickCancelButton,
    selectFile,
  } = useSendImageForm();

  return (
    <form className={container} onSubmit={handleSubmit(onSubmit)}>
      <div className={inputField} onClick={selectFile} role="presentation">
        {fileName ? (
          <img src={imageSource} alt="アップロード画像" className={image} />
        ) : (
          '+ 画像をアップロード'
        )}

        {/* ダミーインプット: 見えない */}
        <ImageInput
          fileInputRef={fileInputRef}
          refCallback={ref}
          id={IMAGE_ID}
          {...rest}
        />
      </div>
      <span className={errorMessage}>{errors?.message?.toString()}</span>

      {/* キャンセルボタン */}
      <div className={buttonGroup}>
        <button onClick={handleClickCancelButton}>×キャンセル</button>
        <button type="submit">画像を送信</button>
      </div>
    </form>
  );
};
