""" Logic for the top and bottom layers of the virtual Square-1 """


class Layer:
    """Either the top or bottom layer of a virtual Square-1 object."""

    pieces = [
        (2, "FL"),
        (1, "L"),
        (2, "BL"),
        (1, "B"),
        (2, "BR"),
        (1, "R"),
        (2, "FR"),
        (1, "F"),
    ]

    def __init__(self, top_or_bottom=str):
        self.top_or_bottom = top_or_bottom

    def tick_clock(self):
        """Turns the layer by one piece clockwise."""
        cur_pieces = self.pieces

        if self.top_or_bottom == "top":
            print("do it 1 ")
            print(cur_pieces, self.top_or_bottom)
            last_piece = cur_pieces.pop(len(cur_pieces) - 1)
            cur_pieces.insert(0, last_piece)
            print(cur_pieces, self.top_or_bottom)
            print("\n")
        elif self.top_or_bottom == "bottom":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces) - 1, first_piece)

        self.pieces = cur_pieces

    def tick_prime(self):
        """Turns the layer by one piece counterclockwise."""
        cur_pieces = self.pieces

        if self.top_or_bottom == "bottom":
            last_piece = cur_pieces.pop(len(cur_pieces) - 1)
            cur_pieces.insert(0, last_piece)
        elif self.top_or_bottom == "top":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces) - 1, first_piece)

        self.pieces = cur_pieces

    def remove_slice_pieces(self):
        """
        Removes and returns the pieces that are right of the slice, if a slice is possible.
        Should be used immediately before add_slice_pieces().
        """
        value = 0
        total_pieces_values = 0
        pieces_list = self.pieces

        for i, piece in enumerate(pieces_list):
            if total_pieces_values < 6:
                total_pieces_values += piece[value]
            elif total_pieces_values == 6:
                sliced_pieces = pieces_list[i:]
                self.pieces = pieces_list[:i]

                return sliced_pieces
            else:
                return "Illegal slice"

    def add_slice_pieces(self, pieces_to_add=list):
        """
        Adds removed pieces back to what is assumed to be the opposite layer.
        Should be used immediately after remove_slice_pieces().
        """
        pieces_to_add.reverse()
        self.pieces += pieces_to_add
