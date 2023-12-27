function delayedGreeting(delay) {
  return new Promise((resolve, reject) => {
    // Validate the delay input
    if (typeof delay !== 'number' || delay <= 0) {
      reject("Invalid delay. Please provide a positive number.");
    } else {
      // Use setTimeout to simulate an asynchronous operation
      setTimeout(() => {
        resolve(`Greetings! This message was delayed by ${delay} milliseconds.`);
      }, delay);
    }
  });
}

// Example usage:

// Valid case
delayedGreeting(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Invalid case
delayedGreeting(-100)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });