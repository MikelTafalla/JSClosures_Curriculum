Closures can be really important and uselful on privacy matters.

In this exercise you will create an object with the method publicfunction inside. PThe publicfunction will call privatefunction. That way we are securing the private function so it can only be access through the public function.

As a result, you should be able to call object.publicfunction() and through it activate private function. But you shoud NOT be able to do a.privatefunction().

When you call object.publicfunction()the message "your information is secure with us" should be console logged.





Tip: 
1. You can start with an anonymous function
2. your return statement should look like 
return {
        publicfunction : function () {
            privatefunction();
        }
    }