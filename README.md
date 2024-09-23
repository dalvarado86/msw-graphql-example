# MSW GraphQL Example

This repository provides an example of using Mock Service Worker (MSW) with GraphQL. MSW is a powerful tool for mocking API requests in both development and testing environments.

## Getting Started

### Prerequisites

- Node.js (>= 12.x)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/dalvarado86/msw-graphql-example.git
    cd msw-graphql-example
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

Note: Latest version of MSW is having issues with Next.JS, please use the 2.0.14 in the meaintime MSW is fixed.

### Running the Example

To start the development server:

```sh
npm run dev
```

## Usage

This example demonstrates how to set up MSW to intercept GraphQL requests and provide mock responses. You can customize the mocks in the `src/mocks/handlers.js` file.

## Acknowledgements

- [Mock Service Worker (MSW)](https://mswjs.io/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
