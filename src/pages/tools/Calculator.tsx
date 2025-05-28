
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calculator as CalcIcon } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForValue, setWaitingForValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForValue) {
      setDisplay(num);
      setWaitingForValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    }

    setWaitingForValue(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    const inputValue = parseFloat(display);
    const prevValue = previousValue;

    if (prevValue !== null && operation) {
      let result = 0;
      switch (operation) {
        case '+':
          result = prevValue + inputValue;
          break;
        case '-':
          result = prevValue - inputValue;
          break;
        case '×':
          result = prevValue * inputValue;
          break;
        case '÷':
          result = prevValue / inputValue;
          break;
      }
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForValue(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <CalcIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Calculator</h1>
          <p className="text-gray-600">Simple calculator for everyday use</p>
        </div>
        
        <Card className="p-6">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="text-right text-3xl font-mono">{display}</div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <Button onClick={clear} variant="outline" className="col-span-2">Clear</Button>
            <Button onClick={() => inputOperation('÷')} variant="outline">÷</Button>
            <Button onClick={() => inputOperation('×')} variant="outline">×</Button>
            
            <Button onClick={() => inputNumber('7')}>7</Button>
            <Button onClick={() => inputNumber('8')}>8</Button>
            <Button onClick={() => inputNumber('9')}>9</Button>
            <Button onClick={() => inputOperation('-')} variant="outline">-</Button>
            
            <Button onClick={() => inputNumber('4')}>4</Button>
            <Button onClick={() => inputNumber('5')}>5</Button>
            <Button onClick={() => inputNumber('6')}>6</Button>
            <Button onClick={() => inputOperation('+')} variant="outline">+</Button>
            
            <Button onClick={() => inputNumber('1')}>1</Button>
            <Button onClick={() => inputNumber('2')}>2</Button>
            <Button onClick={() => inputNumber('3')}>3</Button>
            <Button onClick={calculate} className="row-span-2 bg-blue-600 hover:bg-blue-700">=</Button>
            
            <Button onClick={() => inputNumber('0')} className="col-span-2">0</Button>
            <Button onClick={() => inputNumber('.')}>.</Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Calculator;
