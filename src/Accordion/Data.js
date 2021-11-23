const Data = [
  {
    id: 1,
    question: 'What is Payload in terms of RESTful web services?',
    answer:
      'Payload refers to the data passes in the request body. It is not the same as the request parameters. The payload can be sent only in POST methods as part of the request body.',
  },
  {
    id: 2,
    question: 'What is the concept of statelessness in REST?',
    answer:
      'The REST architecture is designed in such a way that the client state is not maintained on the server. This is known as statelessness. The context is provided by the client to the server using which the server processes the client’s request. The session on the server is identified by the session identifier sent by the client.',
  },
  {
    id: 3,
    question: 'What is a REST Resource?',
    answer:
      'Every content in the REST architecture is considered a resource. The resource is analogous to the object in the object-oriented programming world. They can either be represented as text files, HTML pages, images, or any other dynamic data.',
  },
  {
    id: 4,
    question: ' How can you test RESTful Web Services?',
    answer:
      'RESTful web services can be tested using various tools like Postman, Swagger, etc. Postman provides a lot of features like sending requests to endpoints and show the response which can be converted to JSON or XML and also provides features to inspect request parameters like headers, query parameters, and also the response headers.',
  },
  {
    id: 5,
    question: 'Messaging in terms of RESTful web services?',
    answer:
      'The technique of sending a message from the REST client to the REST server in the form of an HTTP request and the server responding back with the response as HTTP Response is called Messaging. The messages contained constitute the data and the metadata about the message.',
  },
]
export default Data
