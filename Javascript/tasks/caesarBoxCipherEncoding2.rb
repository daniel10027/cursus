def caesarBoxCipherEncoding2(message)
    (2...message.size).count { |n|
        encode(encode(message, n), n) == message }
end

def encode msg, n
    return nil if msg.nil? || msg.size % n != 0
    a = msg.chars.to_a
    z = []
    while a.size > 0
        z << a.shift(n)
    end
    z = z.transpose
    z.map(&:join).join
end
