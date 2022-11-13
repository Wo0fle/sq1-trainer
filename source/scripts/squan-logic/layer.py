""" Logic for the top and bottom layers of the virtual Square-1 """


class Layer:
    """Either the top or bottom layer of a virtual Square-1 object"""

    def __init__(self, top_or_bottom, pieces):
        self.top_or_bottom = top_or_bottom
        self.pieces = pieces

    def tick_clock(self):
        """Turn the layer by one piece clockwise"""
        cur_pieces = self.pieces

        if self.top_or_bottom == "top":
            last_piece = cur_pieces.pop(len(cur_pieces))
            cur_pieces.insert(0, last_piece)
        elif self.top_or_bottom == "bottom":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces), first_piece)

        self.pieces = cur_pieces

    def tick_prime(self):
        """Turn the layer by one piece counterclockwise"""
        cur_pieces = self.pieces

        if self.top_or_bottom == "bottom":
            last_piece = cur_pieces.pop(len(cur_pieces))
            cur_pieces.insert(0, last_piece)
        elif self.top_or_bottom == "top":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces), first_piece)

        self.pieces = cur_pieces

    def remove_slice_pieces(self):
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

    def add_slice_pieces(self, pieces_to_add):
        return 0
