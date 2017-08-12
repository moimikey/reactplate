/**
 * Express, production server, health checks
 */

 export const checks = [{
   type: 'tcp-ip',
   host: 'github.com',
   port: 80,
   interval: 30000,
   id: 'github-port-80',
   name: 'GitHub TCP/IP Port 80',
   severity: 2,
   businessImpact: 'Things won\'t install',
   technicalSummary: 'Something went wrong!',
   panicGuide: 'Don\'t panic'
 }]
