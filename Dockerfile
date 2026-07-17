FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

<<<<<<< HEAD
CMD ["nginx", "-g", "daemon off;"]
=======
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 76cc2d4 (allignment changes)
