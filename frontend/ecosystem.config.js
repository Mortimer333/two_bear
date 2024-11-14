module.exports = {
  apps : [{
    name: "next-app",
    script: "npm",
    args: "start",
    cwd: "/var/www/html/bear2eat/frontend/app",
    watch: true,
    env: {
      NODE_ENV: "production",
    }
  }]
};
