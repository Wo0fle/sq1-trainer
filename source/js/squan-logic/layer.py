""" Logic for the top and bottom layers of the virtual Square-1 """


class Layer:
    """Single layer object"""

    def __init__(self, top_or_bottom, pieces):
        self.top_or_bottom = top_or_bottom
        self.pieces = pieces

    def tick_clock(self):
        """Turn the virtual Square-1 one piece clockwise"""

    def tick_prime(self):
        """Turn the virtual Square-1 one piece counterclockwise"""
