.PHONY: install dev build clean

install:
	npm install

dev:
	npx ng serve --open

build:
	npx ng build --configuration production

clean:
	rm -rf node_modules dist .angular
