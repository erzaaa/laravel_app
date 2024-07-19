.PHONY: setup up d b ps node

setup:
	@make up
	@make ps

up:
	docker-compose up -d

d:
	docker-compose down

ps:
	docker-compose ps

node:
	docker-compose exec backend npm run dev
