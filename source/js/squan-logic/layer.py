""" Logic for the top and bottom layers of the virtual Square-1 """


class Layer:
    """Single layer object"""

    def __init__(self, top_or_bottom, pieces):
        self.top_or_bottom = top_or_bottom
        self.pieces = pieces

    def tick_clock(self):
        """Turn the virtual Square-1 one piece clockwise"""
        cur_pieces = self.pieces

        if self.top_or_bottom == "top":
            last_piece = cur_pieces.pop(len(cur_pieces))
            cur_pieces.insert(0, last_piece)
        elif self.top_or_bottom == "bottom":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces), first_piece)

        self.pieces = cur_pieces

    def tick_prime(self):
        """Turn the virtual Square-1 one piece counterclockwise"""
        cur_pieces = self.pieces

        if self.top_or_bottom == "bottom":
            last_piece = cur_pieces.pop(len(cur_pieces))
            cur_pieces.insert(0, last_piece)
        elif self.top_or_bottom == "top":
            first_piece = cur_pieces.pop(0)
            cur_pieces.insert(len(cur_pieces), first_piece)

        self.pieces = cur_pieces
