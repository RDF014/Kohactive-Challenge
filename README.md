# KOHACTIVE TECHNICAL CHALLENGE


## PROMPT
Create a service that accepts the necessary information and sends emails. It should provide an abstraction between two different email service providers. If one of the services goes down, your service can quickly failover to a different provider without affecting your customers.

## HOW TO RUN
1. Open `test.env` file in the root directory and follow the instructions
2. Run `npm start` in the root directory
  * This will run webpack and the server
  * The terminal will log which port the server is listening to
3. Access the app at `localhost:{port}`, where port is the number logged from the server

## TECHNOLOGIES

### FRONT-END
* React
* Webpack
* Babel

### BACK-END
* Node
* Express
* SparkPost
* SendGrid
