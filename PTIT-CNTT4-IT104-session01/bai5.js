const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

  const { title, author } = response.data;
  
  const { name: authorName, email: authorEmail } = author;
  
  // In ra console
  console.log(title);            
  console.log(author);     
  console.log(authorName);      
  console.log(authorEmail);      
  
  alert(title);
    alert(author);
    alert(authorName);
    alert(authorEmail);

  