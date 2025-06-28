#!/usr/bin/env node
import { McpServer, StdioTransport } from '@modelcontextprotocol/sdk';
import axios from 'axios';

// Create an MCP server with stdio transport
const server = new McpServer({
  transport: new StdioTransport(),
  name: 'Weather MCP Server',
  description: 'A simple MCP server that provides weather information',
  version: '1.0.0'
});

// Define a tool to get weather information
server.registerTool({
  name: 'get_weather',
  description: 'Get current weather information for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The city name or location to get weather for'
      }
    },
    required: ['location']
  },
  handler: async ({ location }) => {
    try {
      // Note: In a real implementation, you would use a proper API key
      // This is using a free weather API that doesn't require authentication
      const response = await axios.get(`https://wttr.in/${encodeURIComponent(location)}?format=j1`);
      
      const weatherData = response.data;
      
      return {
        location: location,
        current_condition: weatherData.current_condition[0],
        weather_description: weatherData.current_condition[0].weatherDesc[0].value,
        temperature_C: weatherData.current_condition[0].temp_C,
        temperature_F: weatherData.current_condition[0].temp_F,
        humidity: weatherData.current_condition[0].humidity,
        wind_speed: weatherData.current_condition[0].windspeedKmph
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw new Error(`Failed to get weather for ${location}: ${error.message}`);
    }
  }
});

// Start the server
server.start().catch(error => {
  console.error('Failed to start MCP server:', error);
  process.exit(1);
});

console.log('Weather MCP Server started. Waiting for connections...');
