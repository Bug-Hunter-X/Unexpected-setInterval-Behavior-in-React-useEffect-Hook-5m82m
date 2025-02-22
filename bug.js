```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const intervalId = setInterval(() => {
      setCount(count + 1); 
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array, runs only once

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```