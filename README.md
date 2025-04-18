# MCP Weather Server

A simple Model Context Protocol (MCP) server that provides weather information for any location.

## What is MCP?

The Model Context Protocol (MCP) is a standardized way for AI applications and agents to connect with data sources and tools. It allows AI models like Claude to interact with your local system, external services, and custom tools through a standardized interface.

## Features

- Get current weather information for any location
- Compatible with Claude Desktop and other MCP clients
- Uses the free wttr.in weather API (no API key required)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mcp-weather-server

# Install dependencies
npm install
```

## Usage

### Running the server

```bash
node index.js
```

### Connecting to Claude Desktop

1. Open Claude Desktop
2. Go to Settings > MCP Servers
3. Add a new server
4. Select "Custom" and enter the path to your server executable
5. Set the command to: `node /Users/le-yo/CascadeProjects/mcp-weather-server/index.js`
6. Save and restart Claude Desktop

### Example prompts for Claude

Once connected, you can ask Claude to use the weather tool:

- "What's the current weather in New York?"
- "Tell me the temperature in London right now."
- "Is it raining in Tokyo?"

## How it works

This server implements the Model Context Protocol to provide a tool that fetches weather data from the wttr.in API. When Claude or another MCP client connects to this server, they can use the `get_weather` tool to retrieve current weather conditions for any location.

## Extending the server

You can extend this server by:

1. Adding more weather-related tools (forecast, historical data, etc.)
2. Implementing other MCP features like resources or prompts
3. Using a different weather API with more features

## License

MIT
