// module.exports = {
//   apps : [{
//     env: {
//       NODE_ENV: "development",
//       PORT: "3000"
//     },
//     name: "next-app",
//     script: "npm",
//     args: "start",
//     cwd: "/var/www/html/bear2eat/frontend/",
//     watch: true,
//     env: {
//       NODE_ENV: "production",
//     }
//   }]
// };

module.exports = {
  apps: [
    {
      name: "next-app",
      cwd: "/var/www/html/bear2eat/frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      env: {
        NODE_ENV: "development",
      },
      watch: true
    }
  ]
}