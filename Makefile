dec:
	tsc -w --target ES6 --emitDecoratorMetadata --experimentalDecorators ./decorators.ts

gen:
	tsc -w --target ES6 --emitDecoratorMetadata --experimentalDecorators ./generics.ts