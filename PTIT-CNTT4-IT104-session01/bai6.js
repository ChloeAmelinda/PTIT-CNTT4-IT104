function createUser(name, age = 18, role = "user") {
    return {
      name,
      age,
      role,
    };
  }
  
  // Gọi hàm và in kết quả:
  console.log(createUser("Dev"));
  
  
  console.log(createUser("Changiuoi", 19, "Admin"));
  
  