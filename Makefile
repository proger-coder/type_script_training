do:
	tsc -w --target ES6 --emitDecoratorMetadata --experimentalDecorators ./training.ts

gen:
	tsc -w --target ES6 --emitDecoratorMetadata --experimentalDecorators ./generics.ts