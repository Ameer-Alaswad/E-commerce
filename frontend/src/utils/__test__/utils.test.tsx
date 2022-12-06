import { addToShoppingCartLogic, checkUserLoggedIn } from "../utils";

describe("addToShoppingCartLogic", () => {
    const cartItems = [
        {
            productId: "Adidas Fit Pant",
            quantity: 1,
            productLimit: 6,
        },
    ];

    const product = [
        {
            name: "Nike Slim shirt",
            label: "nike-slim-shirt",
            category: "Shirts",
            image: "/images/p1.jpg", // 679px × 829px
            price: 120,
            countInStock: 10,
            brand: "Nike",
            rating: 4.5,
            numReviews: 10,
            description: "high quality shirt",
        },
    ];

    const mockSetCartItems = jest.fn();

    test("productIsNotInShoppingCart", () => {
        const alert = jest.fn();
        const props = {
            productName: "Adidas",
            cartItems,
            setCartItems: mockSetCartItems,
            product,
        };

        addToShoppingCartLogic(props);

        expect(mockSetCartItems).toHaveBeenCalledWith([
            {
                productId: "Adidas Fit Pant",
                quantity: 1,
                productLimit: 6,
            },
            { productId: "Adidas", productLimit: 6, quantity: 1 },
        ]);
    });

    test("reachedProductLimitForUser", () => {
        const cartItems = [
            {
                productId: "Adidas Fit Pant",
                quantity: 1,

                productLimit: 0,
            },
        ];

        global.alert = jest.fn().mockImplementation(() => "product per purchase limit")
        const props = {
            productName: "Adidas Fit Pant",
            cartItems,
            setCartItems: mockSetCartItems,
            product,
        };
        addToShoppingCartLogic(props)
        expect(global.alert).toHaveBeenCalledTimes(1);
        expect(global.alert).toReturnWith("product per purchase limit");

    });

    test("productNotInStock", () => {
        const product = [
            {
                name: "Nike Slim shirt",
                label: "nike-slim-shirt",
                category: "Shirts",
                image: "/images/p1.jpg", // 679px × 829px
                price: 120,
                countInStock: 0,
                brand: "Nike",
                rating: 4.5,
                numReviews: 10,
                description: "high quality shirt",
            },
        ];
        const cartItems = [
            {
                productId: "Adidas Fit Pant",
                quantity: 5,

                productLimit: 6,
            },
        ];

        global.alert = jest.fn().mockImplementation(() => "error")
        const props = {
            productName: "Adidas Fit Pant",
            cartItems,
            setCartItems: mockSetCartItems,
            product,
        };
        // expect(addToShoppingCartLogic(props)).toBe()
        addToShoppingCartLogic(props)
        // expect(global.alert).toHaveBeenCalledTimes(1);
        expect(global.alert).toReturnWith("error");

    });
    test("productInStock", () => {
        const props = {
            productName: "Adidas Fit Pant",
            cartItems,
            setCartItems: mockSetCartItems,
            product,
        };
        addToShoppingCartLogic(props);

        expect(mockSetCartItems).toHaveBeenCalledWith([
            { productId: "Adidas Fit Pant", quantity: 2, productLimit: 5 },
        ]);
    });

});


describe("checkUserLoggedIn", () => {
    const userObj = {
        _id: "string",
        name: "string",
        email: "string",
        isAdmin: false,
        token: "string",
    };

    const localStorageMock = {
        getItem: jest.fn(() => userObj),
    };
    test("checkUserLoggedIn", () => {
        global.localStorage = localStorageMock as unknown as Storage;
        JSON.parse = jest.fn().mockImplementationOnce(() => userObj);

        expect(checkUserLoggedIn(userObj)).toEqual(userObj);
    });




});



