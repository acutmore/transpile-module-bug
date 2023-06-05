import fooValue from "./values";
import type {Foo} from "./types";

const Foo: Foo = fooValue as any as Foo;

export {Foo};

