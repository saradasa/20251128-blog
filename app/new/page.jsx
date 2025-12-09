"use client";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../lib/firebase";

export default function newBlog() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  async function handleAdd() {
    try {
      const docRef = await addDoc(collection(db, "newblog"), {
        title: title,
        contents: contents,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <p>記事投稿</p>
      <form>
        <div>
          <label>
            タイトル
            <br />
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            内容
            <br />
            <textarea
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleAdd}>
            送信
          </button>
        </div>
      </form>
      <div>
        <a href="../" target="_blank" rel="noopener noreferrer">
          ホーム画面へ
        </a>
      </div>
    </>
  );
}
