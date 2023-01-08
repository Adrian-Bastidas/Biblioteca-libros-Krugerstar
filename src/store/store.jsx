import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([
     {
      id: "2ad6b5e2-9c2b-4959-b740-9335c85eed74",
      title: "El ascenso del Héroe del Escudo",
      author: "Aneko Yusagi",
      cover: "http://localhost:3000/image/tate.jpg",
      intro: "Tate no Yūsha no Nariagari o también conocida por su nombre en inglés The Rising of The Shield Hero, es una serie de novelas ligeras escritas por Aneko Yusagi. Originalmente serializada como novela web, ​ fue adquirida por Media Factory quien amplió la historia y la publicó con ilustraciones de Seira Minami.",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Tensei Shitara Slime Datta Ken",
      author: "Fuse",
      cover: "http://localhost:3000/image/slime.jpg",
      intro: "Tensei Shitara Slime Datta Ken, también conocida en inglés como That Time I Got Reincarnated as a Slime, abreviada como TenSura ​ o Aquella vez que me convertí en Slime en español, ​ es una serie de novelas ligeras escritas por Fuse e ilustradas por Mitz Vah.",
      completed: true,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b72",
      title: "Tokidoki Bosotto Russia-go de Dereru Tonari no Aalya-san",
      author: "SunSunSun",
      cover: "http://localhost:3000/image/roshidere.jpg",
      intro: "okidoki Bosotto Russia-go de Dereru Tonari no Aalya-san, también conocida como Alya Sometimes Hides Her Feelings in Russian en inglés y de forma abreviada como Roshidere, es una serie de novelas ligeras japonesas escritas por SunSunSun e ilustradas por Momoco",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b71",
      title: "Korosensei Quest!",
      author: "Watanabe Kizuku",
      cover: "http://localhost:3000/image/koro.jpg",
      intro: "Koro-sensei Q! es una serie de novelas de comedia escrita por Kizuku Watanabe e ilustrada por Jō Aoto. Es un spin-off de la popular obra del autor Yūsei Matsui, Assassination Classroom. Ha sido serializado en la revista Saikyō Jump de Shūeisha desde el 2 de octubre de 2015.",
      completed: true,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b112736b76",
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      cover: "http://localhost:3000/image/jujutsu.png",
      intro: "Gege Akutami es una mangaka japonesa de la prefectura de Iwate en Japón y es mejor conocida por ser la creadora de la serie Jujutsu Kaisen. Gege Akutami es un seudónimo y se desconoce el nombre real de la autora",
      completed: true,
      review: "",
    }, 
  ]);

  function createItem(item) {
    const temp = [...items];

    temp.unshift(item);

    setItems([...temp]);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);

    const temp = [...items];

    temp[index] = { ...item };

    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
