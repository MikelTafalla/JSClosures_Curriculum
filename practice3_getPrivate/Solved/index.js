let security = (
    function () {
      let privatefunction = function () {
        console.log("your information is secure with us")
      }
  
      return {
        publicfunction : function () {
          privatefunction();
        }
      }
    }
  )() // the last two parenthesis are used to called the anonymous function
  security.publicfunction()
  security.privatefunction() // logs an error