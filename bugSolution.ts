function printString(str: string | number): void {
  console.log(String(str)); // Convert number to string before logging
}

function usePrintString(): void {
  const myNumber: number = 10;
  printString(myNumber); // Works now
}

usePrintString();