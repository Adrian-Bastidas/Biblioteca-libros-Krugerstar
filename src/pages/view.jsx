import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  return (
    <Layout>
      <h2 className="tit">{item?.title}</h2>
      <div className="image">{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
      <div className="nombre">{item?.author}</div>
      <div className="estado">{item?.completed ? "Completado" : "No terminado"}</div>
      <div className="intro">{item?.intro}</div>
      <div className="review">{item?.review}</div>

    </Layout>
  );
}
