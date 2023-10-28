import { useGetImageUrl } from '@/hooks/useGetImageUrl';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export const IMAGE_ID = 'image';

type FormValues = {
  image: FileList;
};

export const useSendImageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { imageUrl } = useGetImageUrl({ file: imageFile });

  // OS標準のファイル選択ダイアログを開く
  const selectFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  // 画像が変更された時の処理
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;

    setImageFile(files[0]);
  };

  // 選択画像が取り消された時の処理
  const handleClickCancelButton = () => {
    setImageFile(null);
    // <input />タグの値をリセット
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // フォーム送信に必要な値・関数の登録
  const { ref, ...rest } = register(IMAGE_ID, {
    onChange: handleFileChange, // フォームの値を変更する
    required: 'ファイルを選択してください', // フォームを必須項目にする
  });

  // フォーム送信時の処理
  const onSubmit = async (data: FormValues) => {
    // データ送信する処理を記述する。
    console.log('送信されたデータ：', data);
  };

  return {
    imageFile,
    imageUrl,
    fileInputRef,
    errors: errors.image,
    rest,
    ref,
    handleSubmit,
    onSubmit,
    handleClickCancelButton,
    selectFile,
  };
};
