function CartFooter() {
  return (
    <footer className="border-t flex justify-center fixed bottom-0 w-full">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 py-5">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} Morning Bites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default CartFooter;
