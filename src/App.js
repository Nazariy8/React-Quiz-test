import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'застосунок'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['застосунок', 'частина застосунку або сторінки', 'те, що я не знаю що таке'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же ж HTML, але з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Як створити компонент у вигляді функції?',
    variants: ['function = MyComponent()',
              'function MyComponent() { return <div />; }',
              'createComponent(MyComponent)'],
    correct: 1,
  },
  {
    title: 'Що таке useState у React?',
    variants: ['Метод рендеру компонента',
              'Хук для створення стану в функціональному компоненті',
              'Обробник подій'],
    correct: 1,
  },
  {
    title: 'Як передати дані в дочірній компонент?',
    variants: ['Через глобальну змінну',
              'Через useEffect',
              'Через пропси'],
    correct: 2,
  },
  {
    title: 'Який метод використовується для створення нового React-проєкту?',
    variants:
              ['npx create-react-app',
              'npx create-js-app',
              'npm build react'],
    correct: 0,
  },
  {
    title: 'Коли краще використовувати фрагменти (<></>)?',
    variants:
              [' Щоб замінити div на span',
              'Коли потрібно обгорнути кілька елементів без додаткового вузла в DOM',
              'Щоб видалити стилі'],
    correct: 1,
  }
];

function Result({step,setStep, correct , setCorrect}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви вгадали {correct} відповідей з {questions.length}</h2>
      <button onClick={() => {
        setStep(step = 0);
        setCorrect(correct = 0);
      }
      }>Попробувати знову</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const perc = Math.round(step / questions.length * 100);
  return (
      <>
      <div className="progress">
        <div style={{ width: `${perc}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) =>
            (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))
        }
      </ul>
    </>)
}

function App() { 
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }
  return (
    <div className="App">
      {
        step != questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />) : (<Result correct={correct} setCorrect={setCorrect}  step={step} setStep={setStep}/>)
      }
      
    </div>
  );
}

export default App;
