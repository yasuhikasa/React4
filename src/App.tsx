import { ChangeEvent, useState, FC, memo } from "react";
import styled from 'styled-components';
import './App.css';




export const App: FC =() =>{
  //テキストボックスState
  const [text,setText] = useState<string>("");
  //メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  //テキストボックス入力時に入力内容をStateに確定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //追加ボタンを押下
  const onClickAdd = () => {
    //State変更を正常に検知させるため新たな配列を作成
    const newMemos = [...memos];
    //テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    //テキストボックスを空に
    setText("");
  };


  //[削除]ボタンを押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = (index: number) => {
    //State変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    //メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }


  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>

      <SContainer>
        <p>メモ一覧</p>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default App;
