import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function markdown(string) {
  const target = string[0];
  const trimSize = /^\s+/.exec(string)[0].length;
  return target
    .split("\n")
    .map((line) => line.substr(trimSize - 1))
    .join("\n");
}

export default {
  introspection: {
    type: "sdl",
    paths: [path.join(__dirname, "/schemas/**/*.graphql")],
  },
  website: {
    template: "carbon-multi-page",
    staticAssets: path.join(__dirname, "/assets"),
    options: {
      siteRoot: "/homecare-document",
      appFavicon:
        "https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/logo/origin-homecare-favicon.ico",
      appLogo:
        "https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/logo/origin-homecare-logo-white.png",

      pages: [
        {
          title: "Introduction",
          content: [
            {
              title: "Welcome",
              content: markdown`
# 👋 Welcome to Homecare API

The Homecare API provides a comprehensive GraphQL interface for managing home healthcare services. This documentation will guide you through authentication, available queries, mutations, and best practices.

## 🚀 Quick Start

1. Obtain your API key from the admin panel
2. Set up authentication headers
3. Start making GraphQL queries
4. Explore the schema using Apollo Studio

## 📚 What's Included

- **Queries**: Retrieve patient data, appointments, and medical records
- **Mutations**: Create, update, and manage healthcare operations
- **Subscriptions**: Real-time updates for critical events
- **Type System**: Fully typed GraphQL schema for type safety

## 🔗 Useful Links

- [Apollo GraphQL Studio](https://studio.apollographql.com/sandbox/explorer)
- [GraphQL Official Documentation](https://graphql.org)
              `,
            },
            {
              title: "Authentication",
              content: markdown`
# 🔒 Authentication

All API requests require authentication using an API key. Include the key in your request headers.

## API Key Header

| Header Name | Value        | Description                            |
| ----------- | ------------ | -------------------------------------- |
| x-api-key   | YOUR_API_KEY | Your unique API key for authentication |

## Example Request

~~~bash
curl -X POST https://origin-homecare.myorigin.icu/graphql \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{"query": "{ __typename }"}'
~~~

## JavaScript/TypeScript Example

~~~javascript
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "YOUR_API_KEY",
};

fetch("https://origin-homecare.myorigin.icu/graphql", {
  method: "POST",
  headers: headers,
  body: JSON.stringify({
    query: \`
      query {
        # Your query here
      }
    \`,
  }),
});
~~~

## 🔑 Security Best Practices

- Never expose API keys in client-side code
- Store keys in environment variables
- Rotate keys regularly
- Use different keys for different environments
- Implement rate limiting on your application layer
              `,
            },
            {
              title: "Environments",
              content: markdown`
# 🌍 API Environments

We provide two separate environments for development and production use.

## Environment Endpoints

| Environment | GraphQL Endpoint                             | Purpose                     |
| ----------- | -------------------------------------------- | --------------------------- |
| UAT         | https://origin-homecare.myorigin.icu/graphql | Testing and development     |
| Production  | https://origin-homecare.myorigin.net/graphql | Live production environment |

## Apollo GraphQL Studio

Test your queries interactively using Apollo Studio:

**🔗 [https://studio.apollographql.com/sandbox/explorer](https://studio.apollographql.com/sandbox/explorer)**

### Setting Up Apollo Studio

1. Open Apollo Studio Sandbox
2. Enter the endpoint URL (UAT or Production)
3. Add your API key in the Headers tab:
   ~~~json
   {
     "x-api-key": "YOUR_API_KEY"
   }
   ~~~
4. Start exploring the schema and making queries

## Environment-Specific Notes

### UAT Environment

- Use for testing new features
- Data may be reset periodically
- Performance may vary
- Latest features available first

### Production Environment

- Stable and reliable
- Real customer data
- Rate limiting enforced
- High availability guaranteed
              `,
            },
          ],
        },
        {
          title: "Getting Started",
          content: [
            {
              title: "Making Your First Query",
              content: markdown`
# 🎯 Making Your First Query

Learn how to make your first GraphQL query to the Homecare API.

## Basic Query Structure

GraphQL queries follow a simple structure:

~~~graphql
query {
  fieldName {
    subField1
    subField2
  }
}
~~~

## Example: Introspection Query

Test your connection with a simple introspection query:

~~~graphql
query {
  __schema {
    queryType {
      name
    }
  }
}
~~~

## Next Steps

1. Browse the **Schema** section to explore available types
2. Check the **Queries** section for data retrieval operations
3. Review the **Mutations** section for data modification operations
4. Explore examples in the Apollo Studio playground
              `,
            },
            {
              title: "Best Practices",
              content: markdown`
# ✨ Best Practices

Follow these guidelines to build robust and efficient integrations.

## Query Optimization

### ✅ Do's

- Request only the fields you need
- Use fragments for reusable field sets
- Implement pagination for large datasets
- Use variables for dynamic queries
- Cache responses when appropriate

### ❌ Don'ts

- Avoid requesting deeply nested data unnecessarily
- Don't fetch all fields with wildcard patterns
- Avoid making queries in loops
- Don't ignore GraphQL errors

## Example: Using Variables

~~~graphql
query GetPatient($id: ID!) {
  patient(id: $id) {
    id
    name
    dateOfBirth
  }
}
~~~

Variables:

~~~json
{
  "id": "12345"
}
~~~

## Error Handling

Always handle both network errors and GraphQL errors:

~~~javascript
try {
  const response = await fetch(endpoint, options);
  const data = await response.json();

  if (data.errors) {
    console.error("GraphQL Errors:", data.errors);
  }

  return data.data;
} catch (error) {
  console.error("Network Error:", error);
}
~~~

## Rate Limiting

- Respect rate limits to avoid throttling
- Implement exponential backoff for retries
- Use batch queries when possible
- Consider implementing request queuing
              `,
            },
          ],
        },
      ],
    },
  },
  dev: {
    watch: [
      path.join(__dirname, "/docs"),
      path.join(__dirname, "/schemas/**/*.graphql"),
    ],
  },
};
