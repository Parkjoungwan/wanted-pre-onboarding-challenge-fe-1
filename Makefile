SRCS = ./docker-compose.yml

all: up

up:
	docker-compose -f $(SRCS) up --build -d

fclean:
	docker-compose -f $(SRCS) down --rmi all -v

prune:	fclean
		docker system prune -f --all --volumes

re:	prune
	all