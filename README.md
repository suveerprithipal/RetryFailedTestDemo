# RetryFailedTestDemo

A quick and somewhat dirty demo of mkolisnyk cucumber retry logic. 
Essentially he has created a wrapper around the cucumber runner class which gives us the ability to rerun a failed scenario.
There are some noticeable bugs in the implementation but for all intended purposes his code works great. 

Thanks to mkolisnyk for your time and effort. 
You can find his work here: https://github.com/mkolisnyk/cucumber-reports

As a side note,
I take no credit for his work and have not contributed to this piece.
I merely have created a demonstration on how to use his implementation.

Of course, this is a Maven/Java 8 project. You would require these to be installed before you run this. 
To see it in action, Right click and Run the ExtendedTestRunner.class. 

you should get the following output:

Failed scenarios:
C:/Users/****/****/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:4 # Scenario: When this test fails retry
C:/Users/****/****/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:4 # Scenario: When this test fails retry
C:/Users/****/****/GitHub/RetryFailedTestDemo/./src/test/resources/demo.feature:4 # Scenario: When this test fails retry

Now I also have created a Standard Runner file so that you can see the difference.
As mentioned above, this demo is dirty because I did not bother to write out the complete step defs nor seperate out the runner from step defs etc. 



4 Scenarios (3 failed, 1 passed)
12 Steps (3 failed, 9 passed)
