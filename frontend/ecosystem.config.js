module.exports = {
  apps : [{
    env: {
      NODE_ENV: "development",
      PORT: "3000"
    },
    name: "next-app",
    script: "npm",
    args: "start",
    cwd: "/var/www/html/bear2eat/frontend/app/",
    watch: true,
    env: {
      NODE_ENV: "production",
    }
  }]
};
